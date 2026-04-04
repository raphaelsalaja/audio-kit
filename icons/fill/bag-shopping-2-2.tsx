import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagShopping22({
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
          d="m11.696,8.392l-.724-5.5c-.18-1.363-1.352-2.391-2.727-2.391H3.754C2.379.5,1.208,1.528,1.027,2.892l-.724,5.5c-.104.785.137,1.577.659,2.172.522.596,1.276.937,2.068.937h5.939c.792,0,1.545-.341,2.068-.937.522-.595.762-1.387.659-2.171Zm-5.696-1.892c-1.517,0-2.75-1.233-2.75-2.75,0-.414.336-.75.75-.75s.75.336.75.75c0,.689.561,1.25,1.25,1.25s1.25-.561,1.25-1.25c0-.414.336-.75.75-.75s.75.336.75.75c0,1.517-1.233,2.75-2.75,2.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default BagShopping22;
