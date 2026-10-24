import React from "react";
import { createRoot } from "react-dom/client";
import { Plasma, PlasmaProvider } from "@cruxgarden/plasma-ui";

function PlasmaAvatar() {
  return (
    <PlasmaProvider mood="tidal" maxSurfaces={1}>
      <Plasma
        as="div"
        className="plasma-avatar"
        radius={66}
        tint="#dcefe8"
        opacity={0.82}
        frost={0.38}
        elevation={8}
        lean={false}
        aria-label="Wone"
      >
        <span className="plasma-avatar-letter" aria-hidden="true">W</span>
      </Plasma>
    </PlasmaProvider>
  );
}

const mount = document.getElementById("plasma-avatar-root");
if (mount) createRoot(mount).render(<PlasmaAvatar />);
