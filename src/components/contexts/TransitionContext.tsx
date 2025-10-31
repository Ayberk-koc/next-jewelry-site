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

const TransitionContext = createContext<TransitionType>({
  isTransitioning: false,
  startTransition: () => {
    return;
  },
});

function useTransitionContext() {
  const context = useContext(TransitionContext);

  return context;
}

export default function PendingContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isTransitioning, startTransition] = useTransition();

  const ctxValue: TransitionType = { isTransitioning, startTransition };

  return <TransitionContext value={ctxValue}>{children}</TransitionContext>;
}

export { useTransitionContext };
