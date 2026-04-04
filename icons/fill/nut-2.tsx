import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Nut2({
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
          d="M14.63,4.148L10.38,1.683c-.852-.493-1.908-.493-2.76,0L3.37,4.148c-.845,.49-1.37,1.402-1.37,2.378v4.946c0,.977,.525,1.888,1.37,2.379l4.25,2.465c.426,.247,.903,.37,1.38,.37s.954-.124,1.38-.37l4.25-2.465c.845-.49,1.37-1.402,1.37-2.378V6.527c0-.977-.525-1.888-1.37-2.379Zm-5.63,7.102c-1.243,0-2.25-1.007-2.25-2.25s1.007-2.25,2.25-2.25,2.25,1.007,2.25,2.25-1.007,2.25-2.25,2.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Nut2;
