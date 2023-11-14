import { PropsWithChildren } from "react";

export const Content = ({ children }: PropsWithChildren) =>
	<div className="max-w-[1440px] mx-auto">
		{ children }
	</div>