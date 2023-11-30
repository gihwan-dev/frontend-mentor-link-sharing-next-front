"use client";

import React from "react";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

type Props = {
    children: React.ReactNode;
}

export default function MyDndProvider ({ children }: Props) {
    return <DndProvider backend={HTML5Backend}>{children}</DndProvider>
} 