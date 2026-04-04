import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Contacts({
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
          d="M9.00002 8.53851C9.70082 8.53851 10.269 7.9705 10.269 7.2695C10.269 6.5685 9.70082 6.00049 9.00002 6.00049C8.29922 6.00049 7.73102 6.5685 7.73102 7.2695C7.73102 7.9705 8.29912 8.53851 9.00002 8.53851Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M11.198 11.9115C11.595 11.7865 11.804 11.3485 11.635 10.9675C11.187 9.9565 10.177 9.25049 8.99998 9.25049C7.82298 9.25049 6.81297 9.9565 6.36497 10.9675C6.19697 11.3485 6.40498 11.7865 6.80198 11.9115C7.36698 12.0895 8.11598 12.2505 8.99998 12.2505C9.88398 12.2505 10.632 12.0895 11.198 11.9115Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M13.75 13.2505V4.75049C13.75 3.64549 12.8546 2.7505 11.75 2.7505H6.25C5.1454 2.7505 4.25 3.64549 4.25 4.75049V13.2505C4.25 14.3555 5.1454 15.2505 6.25 15.2505H11.75C12.8546 15.2505 13.75 14.3555 13.75 13.2505Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.75 4.25049V13.7505"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.25 4.25049V13.7505"
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

export default Contacts;
