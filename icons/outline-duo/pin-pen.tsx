import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PinPen({
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
          d="M12.7959 16.2042L15.9571 13.043C16.3476 12.6525 16.3476 12.0193 15.9571 11.6288L15.3713 11.043C14.9808 10.6525 14.3476 10.6525 13.9571 11.043L10.7959 14.2042L10.0001 17.0001L12.7959 16.2042Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.25 1.75C11.5637 1.75 14.25 4.438 14.25 7.75C14.25 8.01558 14.25 8.17997 14.25 8.49343C13.6803 8.57457 13.0818 8.84675 12.6113 9.23047L12.501 9.33008L9.20703 12.6113C8.97118 12.8472 8.82632 13.1011 8.73633 13.3057L8.66211 13.4922L8.63184 13.5879L7.95508 15.9629C6.15037 15.1517 2.25 11.9532 2.25 7.75C2.25 4.438 4.9363 1.75 8.25 1.75ZM8.25 5.75C7.1454 5.75 6.25 6.646 6.25 7.75C6.25 8.854 7.1454 9.75 8.25 9.75C9.3546 9.75 10.25 8.854 10.25 7.75C10.25 6.646 9.3546 5.75 8.25 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M8.25 9.75C9.3546 9.75 10.25 8.854 10.25 7.75C10.25 6.646 9.3546 5.75 8.25 5.75C7.1454 5.75 6.25 6.646 6.25 7.75C6.25 8.854 7.1454 9.75 8.25 9.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 7.75C14.25 4.438 11.5637 1.75 8.25 1.75C4.9363 1.75 2.25 4.438 2.25 7.75C2.25 11.4915 5.2991 14.5349 7.2384 15.7444"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.7959 16.2042L15.9571 13.043C16.3476 12.6525 16.3476 12.0193 15.9571 11.6288L15.3713 11.043C14.9808 10.6525 14.3476 10.6525 13.9571 11.043L10.7959 14.2042L10.0001 17.0001L12.7959 16.2042Z"
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

export default PinPen;
