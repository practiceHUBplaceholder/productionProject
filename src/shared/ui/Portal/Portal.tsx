import {
    FC, ReactNode, useEffect, useState
} from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement
}

export const Portal:FC<PortalProps> = (
    { children, element = document.body }
) => createPortal(children, element);
