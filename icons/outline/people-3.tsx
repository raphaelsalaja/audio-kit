import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function People3({
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
          d="M13.406 4.2505C14.372 4.2505 15.156 3.4665 15.156 2.5005C15.156 1.5345 14.372 0.750504 13.406 0.750504C12.439 0.750504 11.656 1.5345 11.656 2.5005C11.656 3.4665 12.439 4.2505 13.406 4.2505Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.59399 4.2505C5.55999 4.2505 6.34399 3.4665 6.34399 2.5005C6.34399 1.5345 5.55999 0.750504 4.59399 0.750504C3.62699 0.750504 2.84399 1.5345 2.84399 2.5005C2.84399 3.4665 3.62699 4.2505 4.59399 4.2505Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.41901 13.6175L6.75699 7.59151C6.65299 7.21651 6.349 6.9335 5.965 6.8685C5.567 6.8015 5.106 6.75349 4.594 6.75349C4.082 6.75349 3.62201 6.8015 3.22301 6.8685C2.83901 6.9335 2.534 7.21551 2.431 7.59151C1.877 9.60051 1.323 11.6095 0.768999 13.6175C0.680999 13.9355 0.921009 14.2505 1.25101 14.2505H2.844L3.01801 16.3335C3.06101 16.8515 3.49402 17.2505 4.01502 17.2505H5.17499C5.69499 17.2505 6.128 16.8515 6.172 16.3335L6.34601 14.2505H7.939C8.269 14.2505 8.50899 13.9355 8.42099 13.6175H8.41901Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.656 14.2505L11.83 16.3335C11.873 16.8516 12.306 17.2505 12.827 17.2505H13.987C14.507 17.2505 14.94 16.8516 14.984 16.3335L15.158 14.2505H16.751C17.081 14.2505 17.321 13.9356 17.233 13.6174L15.571 7.59151C15.467 7.21651 15.163 6.93349 14.7789 6.86839C14.381 6.80149 13.92 6.7534 13.4079 6.7534C12.8958 6.7534 12.4359 6.80149 12.0369 6.86839C11.6529 6.93359 11.3479 7.21531 11.2449 7.59151C11.0152 8.42301 10.7859 9.25431 10.5565 10.0859"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default People3;
