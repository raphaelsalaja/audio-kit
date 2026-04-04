import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitHearts({
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
          d="M11.722,2.073c-1.036,.202-1.999,.808-2.722,1.684-.723-.876-1.686-1.481-2.722-1.684-1.124-.219-2.196,.052-3.015,.763-1.58,1.373-1.727,3.367-.383,5.204,.228,.311,.614,.769,1.083,1.321,1.499,1.767,4.288,5.057,4.288,6.889,0,.414,.336,.75,.75,.75s.75-.336,.75-.75c0-1.833,2.789-5.122,4.288-6.889,.469-.553,.855-1.01,1.083-1.321,1.343-1.836,1.196-3.831-.384-5.204-.819-.711-1.89-.982-3.015-.763Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SuitHearts;
