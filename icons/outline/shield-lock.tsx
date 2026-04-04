import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShieldLock({
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
          d="M16.25 12.75H12.25C11.698 12.75 11.25 13.1977 11.25 13.75V15.25C11.25 15.8023 11.698 16.25 12.25 16.25H16.25C16.802 16.25 17.25 15.8023 17.25 15.25V13.75C17.25 13.1977 16.802 12.75 16.25 12.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 12.75V11.25C12.75 10.422 13.422 9.75 14.25 9.75C15.078 9.75 15.75 10.422 15.75 11.25V12.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 6.8757V4.4799C15.25 4.0448 14.969 3.6598 14.555 3.528L9.30499 1.8478C9.10699 1.7848 8.89411 1.7848 8.69501 1.8478L3.44501 3.528C3.03101 3.6611 2.75 4.0448 2.75 4.4799V10.9999C2.75 13.7914 6.71951 15.4672 8.32901 16.0316"
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

export default ShieldLock;
