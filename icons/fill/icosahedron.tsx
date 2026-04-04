import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Icosahedron({
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
          d="M14.63,4.148L10.38,1.683c-.852-.493-1.908-.493-2.76,0L3.369,4.148c-.845,.491-1.369,1.402-1.369,2.378v4.946c0,.977,.524,1.888,1.37,2.379l4.25,2.465c.426,.247,.902,.37,1.38,.37s.954-.123,1.38-.37l4.251-2.465c.845-.491,1.369-1.402,1.369-2.378V6.527c0-.977-.524-1.888-1.37-2.379Zm-5.63-.624l4.771,7.976H4.229L9,3.524Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Icosahedron;
