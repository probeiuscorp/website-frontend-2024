import { useState, useEffect } from "react";
import Head from "next/head";
import Markdown from "react-markdown";

export default function UserPages() {
  const [userPages, setUserPages] = useState([]);
  useEffect(() => {
    let canceled = false;
    fetch("/api/user-pages")
      .then((res) => res.json())
      .then(({ users }) => {
        if (!canceled) {
          setUserPages(users);
        }
      });
    return () => {
      canceled = true;
    };
  }, []);

  return (
    <>
      <Head>
        <title>User pages | USU FSLC</title>
      </Head>
      <main style={{ marginTop: "2rem" }}>
        {userPages.map(({ name, content }) => (
          <div key={name}>
            <details>
              <summary>{name}</summary>
              <Markdown>{content}</Markdown>
            </details>
          </div>
        ))}
      </main>
    </>
  );
}
