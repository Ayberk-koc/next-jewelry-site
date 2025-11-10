"use client";

import {
  createContext,
  ReactNode,
  TransitionFunction,
  useContext,
  useTransition,
} from "react";

type TransitionType = {
  isTransitioning: boolean;
  startTransition: (callback: TransitionFunction) => void;
};

const TransitionContext = createContext<TransitionType | null>(null);

export default function PendingContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isTransitioning, startTransition] = useTransition();

  const ctxValue: TransitionType = { isTransitioning, startTransition };

  return <TransitionContext value={ctxValue}>{children}</TransitionContext>;
}

function useTransitionContext() {
  const context = useContext(TransitionContext);

  if (!context) {
    throw new Error("Context can only be used within a Context-Provder!");
  }

  return context;
}

export { useTransitionContext };
