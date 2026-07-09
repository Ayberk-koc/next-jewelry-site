"use client";

import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
//import { querySchema } from "../utils/queryUtils";
import { useState, useTransition, useEffect } from "react";

export default function Pagenation() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  //const result = querySchema.safeParse(Object.fromEntries(params));
  //const currPage = result.data?.page ?? 1;

  const MAXPAGES = 3; //das erstmal nur vorerst. Denke daran alle entsprechenden Stellen zu ändern!

  const rawPage = Number(searchParams.get("page"));
  const currPage = isNaN(rawPage) ? 1 : rawPage;

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (!isNaN(rawPage) && rawPage < 1) {
      params.set("page", "1");
      router.replace(`?${params.toString()}`);
    } else if (!isNaN(rawPage) && rawPage > MAXPAGES) {
      params.set("page", `${MAXPAGES}`);
      router.replace(`?${params.toString()}`);
    }
  }, [rawPage]);

  const [page, setPage] = useState<number>(currPage);

  useEffect(() => {
    setPage(currPage);
  }, [currPage]);

  //mache noch ober und untergrenze!
  function handleChangePage(val: number) {
    if (page + val > MAXPAGES || page + val < 1) return;

    const params = new URLSearchParams(searchParams.toString());
    const newPage = page + val;
    params.set("page", newPage.toString());

    router.push(`?${params.toString()}`);

    startTransition(() => {
      setPage(newPage);
    });
  }

  function handleSetPage(val: number) {
    const newPage = val;

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());

    router.push(`?${params.toString()}`);

    startTransition(() => {
      setPage(newPage);
    });
  }

  return (
    <div className="flex gap-gap-13 items-center flex-wrap max-[600px]:gap-gap-9 max-[400px]:gap-gap-7">
      <Button
        variant={"outline"}
        size={"xl"}
        className="font-text-md-medium max-[500px]:gap-gap-3 max-[500px]:py-gap-4 max-[500px]:px-gap-7"
        onClick={() => handleChangePage(-1)}
        disabled={isPending || page == 1}
      >
        PREV
      </Button>
      <div className="flex items-center gap-gap-9 max-[600px]:gap-gap-9 max-[400px]:gap-gap-7">
        <Button
          variant={page == 1 ? "fill" : "outline"}
          size={"xl"}
          className="font-text-md-medium min-[500px]:w-[59px] max-[500px]:gap-gap-3 max-[500px]:py-gap-4 max-[500px]:px-gap-7"
          onClick={() => handleSetPage(1)}
          disabled={isPending}
        >
          01
        </Button>
        <Button
          variant={page == 2 ? "fill" : "outline"}
          size={"xl"}
          className="font-text-md-medium min-[500px]:w-[59px] max-[500px]:gap-gap-3 max-[500px]:py-gap-4 max-[500px]:px-gap-7"
          onClick={() => handleSetPage(2)}
          disabled={isPending}
        >
          02
        </Button>
        <Button
          variant={page == 3 ? "fill" : "outline"}
          size={"xl"}
          className="font-text-md-medium min-[500px]:w-[59px] max-[500px]:gap-gap-3 max-[500px]:py-gap-4 max-[500px]:px-gap-7"
          onClick={() => handleSetPage(3)}
          disabled={isPending}
        >
          03
        </Button>
      </div>
      <Button
        variant={"fill"}
        size={"xl"}
        className="font-text-md-medium border max-[500px]:gap-gap-3 max-[500px]:py-gap-4 max-[500px]:px-gap-7"
        onClick={() => handleChangePage(1)}
        disabled={isPending || page == MAXPAGES} //hier noch irgendwie anders den letzten wert abchecken! Nicht hardcoden. Das soll ja vom katalog abhängen! Muss irgendwie max anzahl an pages bekommen!!!!!
      >
        NEXT
      </Button>
    </div>
  );
}
