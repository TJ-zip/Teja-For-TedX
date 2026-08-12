"use client";

import dynamic from "next/dynamic";

// The WebGL layer is purely decorative and browser-only. Loading it without
// SSR keeps the first paint as fast, accessible HTML.
const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => <div aria-hidden="true" className="scene-static" />,
});

export default function SceneMount() {
  return <Scene />;
}
