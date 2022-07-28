import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import ModalLoading from "./ModalLoading";

export function openModal() {
  const Modal = lazy(() => import("./ModalSettings"));
  const modalDiv = document.createElement("div");
  modalDiv.id = "modal";
  document.body.appendChild(modalDiv);

  const root = createRoot(modalDiv);
  root.render(
    <Suspense fallback={<ModalLoading />}>
      <Modal root={root} title="Modal de configuraciones" />
    </Suspense>
  );
}

export function openModalAccount() {
  const Modal = lazy(() => import("./ModalAccount"));
  const modalDiv = document.createElement("div");
  modalDiv.id = "modal";
  document.body.appendChild(modalDiv);

  const root = createRoot(modalDiv);
  root.render(
    <Suspense fallback={<ModalLoading />}>
      <Modal root={root} title="Modal de account" />
    </Suspense>
  );
}
