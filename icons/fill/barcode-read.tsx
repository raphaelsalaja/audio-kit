import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BarcodeRead({
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
          d="M7.75266 5.5C8.16687 5.5 8.50266 5.83579 8.50266 6.25V10C8.50266 10.4142 8.16687 10.75 7.75266 10.75C7.33844 10.75 7.00266 10.4142 7.00266 10V6.25C7.00266 5.83579 7.33844 5.5 7.75266 5.5Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M10.2527 5.5C10.6669 5.5 11.0027 5.83579 11.0027 6.25V10C11.0027 10.4142 10.6669 10.75 10.2527 10.75C9.83847 10.75 9.50269 10.4142 9.50269 10V6.25C9.50269 5.83579 9.83847 5.5 10.2527 5.5Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M2.75 7C2.336 7 2 6.664 2 6.25V4.75C2 3.233 3.233 2 4.75 2H6.75C7.164 2 7.5 2.336 7.5 2.75C7.5 3.164 7.164 3.5 6.75 3.5H4.75C4.061 3.5 3.5 4.061 3.5 4.75V6.25C3.5 6.664 3.164 7 2.75 7Z"
          fill={fill}
        />
        <path
          d="M15.25 7C14.836 7 14.5 6.664 14.5 6.25V4.75C14.5 4.061 13.939 3.5 13.25 3.5H11.25C10.836 3.5 10.5 3.164 10.5 2.75C10.5 2.336 10.836 2 11.25 2H13.25C14.767 2 16 3.233 16 4.75V6.25C16 6.664 15.664 7 15.25 7Z"
          fill={fill}
        />
        <path
          d="M13.25 16H11.25C10.836 16 10.5 15.664 10.5 15.25C10.5 14.836 10.836 14.5 11.25 14.5H13.25C13.939 14.5 14.5 13.939 14.5 13.25V11.75C14.5 11.336 14.836 11 15.25 11C15.664 11 16 11.336 16 11.75V13.25C16 14.767 14.767 16 13.25 16Z"
          fill={fill}
        />
        <path
          d="M6.75 16H4.75C3.233 16 2 14.767 2 13.25V11.75C2 11.336 2.336 11 2.75 11C3.164 11 3.5 11.336 3.5 11.75V13.25C3.5 13.939 4.061 14.5 4.75 14.5H6.75C7.164 14.5 7.5 14.836 7.5 15.25C7.5 15.664 7.164 16 6.75 16Z"
          fill={fill}
        />
        <path
          d="M5.25 12.5C4.836 12.5 4.5 12.164 4.5 11.75V6.25C4.5 5.836 4.836 5.5 5.25 5.5C5.664 5.5 6 5.836 6 6.25V11.75C6 12.164 5.664 12.5 5.25 12.5Z"
          fill={secondaryfill}
        />
        <path
          d="M12.75 12.5C12.336 12.5 12 12.164 12 11.75V6.25C12 5.836 12.336 5.5 12.75 5.5C13.164 5.5 13.5 5.836 13.5 6.25V11.75C13.5 12.164 13.164 12.5 12.75 12.5Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default BarcodeRead;
