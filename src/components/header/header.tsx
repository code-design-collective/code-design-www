import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            C&DC
          </a>
        </div>
        <ul>
          <li>
            <a
              href="https://github.com/Code-and-Design-Collective/"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
