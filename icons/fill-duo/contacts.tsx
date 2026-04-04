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
          d="M3.5 4.75049C3.5 3.23117 4.73129 2.0005 6.25 2.0005H11.75C13.2687 2.0005 14.5 3.23117 14.5 4.75049V13.2505C14.5 14.7698 13.2687 16.0005 11.75 16.0005H6.25C4.73128 16.0005 3.5 14.7698 3.5 13.2505V4.75049Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.00002 8.53851C9.70082 8.53851 10.269 7.9705 10.269 7.2695C10.269 6.5685 9.70082 6.00049 9.00002 6.00049C8.29922 6.00049 7.73102 6.5685 7.73102 7.2695C7.73102 7.9705 8.29912 8.53851 9.00002 8.53851Z"
          fill={fill}
        />
        <path
          d="M11.198 11.9115C11.595 11.7865 11.804 11.3485 11.635 10.9675C11.187 9.9565 10.177 9.25049 9.00004 9.25049C7.82304 9.25049 6.81304 9.9565 6.36504 10.9675C6.19704 11.3485 6.40504 11.7865 6.80204 11.9115C7.36704 12.0895 8.11604 12.2505 9.00004 12.2505C9.88404 12.2505 10.632 12.0895 11.198 11.9115Z"
          fill={fill}
        />
        <path
          d="M16.75 3.50049C17.1642 3.50049 17.5 3.83628 17.5 4.25049V13.7505C17.5 14.1647 17.1642 14.5005 16.75 14.5005C16.3358 14.5005 16 14.1647 16 13.7505V4.25049C16 3.83628 16.3358 3.50049 16.75 3.50049Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.25 3.50049C1.66421 3.50049 2 3.83628 2 4.25049V13.7505C2 14.1647 1.66421 14.5005 1.25 14.5005C0.835786 14.5005 0.5 14.1647 0.5 13.7505V4.25049C0.5 3.83628 0.835786 3.50049 1.25 3.50049Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Contacts;
