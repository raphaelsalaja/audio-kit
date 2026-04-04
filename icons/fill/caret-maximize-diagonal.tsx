import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretMaximizeDiagonal({
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
          d="M14,3h-4.646c-.406,0-.769,.242-.924,.617s-.07,.803,.217,1.09l4.646,4.646c.192,.192,.446,.293,.706,.293,.129,0,.259-.025,.384-.077,.375-.155,.617-.518,.617-.924V4c0-.551-.449-1-1-1Z"
          fill={fill}
        />
        <path
          d="M4.707,8.646c-.287-.287-.714-.373-1.09-.217-.375,.155-.617,.518-.617,.924v4.646c0,.551,.449,1,1,1h4.646c.406,0,.769-.242,.924-.617s.07-.803-.217-1.09l-4.646-4.646Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default CaretMaximizeDiagonal;
