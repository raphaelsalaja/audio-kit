import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Label2Slash({
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
          d="M3.37981 14.6201L14.0922 3.9077L13.8838 3.6504C13.5498 3.2368 13.0547 3 12.5234 3H4.75C3.2334 3 2 4.2334 2 5.75V12.25C2 13.2654 2.55921 14.1438 3.37981 14.6201Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.5157 5.666L6.18158 15H12.5234C13.0546 15 13.5498 14.7632 13.8828 14.3511L17.833 9.4722C18.0557 9.1968 18.0557 8.8033 17.833 8.5279L15.5157 5.666Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M1.99999 16.75C1.80759 16.75 1.61619 16.6768 1.46969 16.5303C1.17669 16.2373 1.17669 15.7627 1.46969 15.4698L15.4697 1.46981C15.7627 1.17681 16.2373 1.17681 16.5302 1.46981C16.8231 1.76281 16.8232 2.2374 16.5302 2.5303L2.53019 16.5303C2.38369 16.6768 2.19239 16.75 1.99999 16.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Label2Slash;
