import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagMinus({
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
          d="M12.667 4.75H5.334C4.297 4.75 3.431 5.543 3.341 6.577L2.689 14.077C2.587 15.245 3.508 16.25 4.681 16.25H12.0232C12.6579 16.25 12.25 15.5 12.25 15.5C11.0074 15.5 10 14.4926 10 13.25C10 12.0074 11.0074 11 12.25 11H15.0039L14.659 6.577C14.57 5.543 13.704 4.75 12.667 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M6.75 4.75V3C6.75 1.757 7.757 0.75 9 0.75C10.243 0.75 11.25 1.757 11.25 3V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.25 13.25H12.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.9777 10.25L14.6581 6.5769C14.5691 5.543 13.7031 4.75 12.6661 4.75H5.33311C4.29611 4.75 3.43111 5.543 3.34111 6.5769L2.68912 14.0769C2.58712 15.2451 3.50812 16.25 4.68112 16.25H12.2501"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default BagMinus;
