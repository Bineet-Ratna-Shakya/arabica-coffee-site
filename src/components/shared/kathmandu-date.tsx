"use client";

import { useState, useEffect } from "react";

export function KathmanduDate() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kathmandu",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(new Date());

    setDate(fmt());
    const id = setInterval(() => setDate(fmt()), 60_000);
    return () => clearInterval(id);
  }, []);

  if (!date) return null;

  return <>{date} (Nepal Time)</>;
}
