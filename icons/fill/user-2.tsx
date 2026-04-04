import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function User2({
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
        <circle
          cx="6"
          cy="2.491"
          fill={secondaryfill}
          r="2.5"
          strokeWidth="0"
        />
        <path
          d="m10.533,8.639c-.932-1.628-2.669-2.639-4.533-2.639s-3.602,1.011-4.533,2.639c-.249.434-.305.954-.154,1.428.15.472.496.863.947,1.072,1.241.574,2.49.861,3.74.861s2.499-.287,3.74-.861h0c.451-.209.796-.6.947-1.072.151-.474.095-.994-.154-1.427Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default User2;
