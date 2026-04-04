import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcaseMusic({
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
          d="M12.5 11.5752V10.25C12.5 9.333 13.0488 8.51558 13.8975 8.16748C14.1719 8.05618 14.4571 8.00049 14.7491 8.00049C15.1455 8.00049 15.5316 8.11089 15.8693 8.30829C16.0049 8.38759 16.1531 8.25878 16.2501 7.99408V6.5C16.2501 5.395 15.3551 4.5 14.2501 4.5H3.75012C2.64512 4.5 1.75012 5.395 1.75012 6.5V13C1.75012 14.105 2.64512 15 3.75012 15L9.47072 15.0882C9.58472 13.3909 10.8706 11.9074 12.5 11.5752Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M13.25 16.75C14.078 16.75 14.75 16.078 14.75 15.25C14.75 14.422 14.078 13.75 13.25 13.75C12.422 13.75 11.75 14.422 11.75 15.25C11.75 16.078 12.422 16.75 13.25 16.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 4.75V2.25C6.25 1.698 6.698 1.25 7.25 1.25H10.75C11.302 1.25 11.75 1.698 11.75 2.25V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 16.75C14.078 16.75 14.75 16.078 14.75 15.25C14.75 14.422 14.078 13.75 13.25 13.75C12.422 13.75 11.75 14.422 11.75 15.25C11.75 16.078 12.422 16.75 13.25 16.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 7.65747V6.75C16.25 5.646 15.355 4.75 14.25 4.75H3.75C2.645 4.75 1.75 5.646 1.75 6.75V13.25C1.75 14.354 2.645 15.25 3.75 15.25H8.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 15.25V10.25C15.067 10.573 15.48 10.942 16 11.297C16.45 11.604 16.879 11.832 17.25 12"
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

export default SuitcaseMusic;
