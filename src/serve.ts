import { readdirSync, statSync } from "fs";
import getPort from "get-port";
import ip from "ip";
import Koa from "koa";
import serve from "koa-static";
import path, { basename } from "path";

const DEFAULT_ROOT_PORT = 3600;
const IP = ip.address();

async function main() {
  const publicDir =
    process.env.NODE_ENV === "production"
      ? __dirname
      : path.join(__dirname, "../public");
  const docRoots = readdirSync(publicDir)
    .map((x) => path.join(publicDir, x))
    .filter((x) => statSync(x).isDirectory());

  console.log("Document roots found:", docRoots);
  const ports = await serveAndGetPorts(docRoots);
  await serveRoot(docRoots, ports);
}

async function serveAndGetPorts(dirs: string[]) {
  return await Promise.all(dirs.map((x, i) => serveDir(x, i)));
}

async function serveDir(dir: string, index: number) {
  const app = new Koa();
  app.use(serve(dir));

  const port = await getPort({ port: DEFAULT_ROOT_PORT + index + 1 });
  app.listen(port);
  return port;
}

async function serveRoot(dirs: string[], ports: number[]) {
  const app = new Koa();
  app.use((ctx) => {
    ctx.body = `
    <ul>

    ${dirs
      .map(
        (name, i) =>
          `<li>
          <a onclick="navigatePort(${
            ports[i]
          })" href="javascript:void(0)">${basename(name)}</a>
        </li>
        `
      )
      .join("")}
    </ul>

    <script>
        function navigatePort(port) {
          window.open('http://' + window.location.hostname + ':' + port);
        }
    </script>
    `;
  });

  const port = await getPort({ port: DEFAULT_ROOT_PORT });
  app.listen(port);

  console.log(`打开 http://localhost:${port} 或者 http://${IP}:${port}`);
}

main();
