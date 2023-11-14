import { PropsWithChildren } from "react";

export const ContentWrapper = ({ children }: PropsWithChildren) =>
	<div className="max-w-[1440px] mx-auto px-8">
		{ children }
	</div>