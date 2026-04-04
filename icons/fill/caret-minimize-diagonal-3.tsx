import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretMinimizeDiagonal3({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m7.707.396c-.287-.287-.714-.373-1.09-.217-.375.155-.617.518-.617.924v3.896c0,.551.449,1,1,1h3.896c.406,0,.769-.242.924-.617s.07-.803-.217-1.09L7.707.396Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m5,6H1.104c-.406,0-.769.242-.924.617s-.07.803.217,1.09l3.896,3.896c.192.192.446.293.706.293.129,0,.259-.025.384-.077.375-.155.617-.518.617-.924v-3.896c0-.551-.449-1-1-1Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CaretMinimizeDiagonal3;
