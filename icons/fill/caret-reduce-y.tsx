import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretReduceY({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M11.348,2.5H6.652c-.463,0-.887,.254-1.104,.664-.217,.409-.191,.902,.069,1.287l2.348,3.468c.233,.344,.62,.549,1.035,.549s.802-.206,1.035-.549l2.348-3.468c.26-.384,.286-.877,.069-1.287-.217-.41-.641-.664-1.104-.664Z"
          fill={fill}
        />
        <path
          d="M10.035,10.081c-.466-.688-1.604-.688-2.07,0l-2.348,3.468c-.26,.384-.286,.877-.069,1.287,.217,.41,.641,.664,1.104,.664h4.696c.463,0,.887-.254,1.104-.664,.217-.409,.191-.902-.069-1.287l-2.348-3.468Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default CaretReduceY;
