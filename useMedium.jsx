import { useState, useEffect } from "react";

export function useMedium(username) {
  const [state, setState] = useState({ data: {}, isFetched: false });

  const mediumRss = `https://medium.com/feed/@${username}`;
  const ENDPOINT = `https://api.rss2json.com/v1/api.json?rss_url=${mediumRss}`;

  useEffect(() => {
    (async () => {
      const response = await fetch(ENDPOINT);
      const json = await response.json();

      if (json.status === "ok") {
        setState({
          data: json,
          isFetched: true,
        });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return { ...state };
}
