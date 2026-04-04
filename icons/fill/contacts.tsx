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
          d="M11.75 2H6.25C4.733 2 3.5 3.233 3.5 4.75V13.25C3.5 14.767 4.733 16 6.25 16H11.75C13.267 16 14.5 14.767 14.5 13.25V4.75C14.5 3.233 13.267 2 11.75 2ZM9.00002 8.53851C9.70082 8.53851 10.269 7.9705 10.269 7.2695C10.269 6.5685 9.70082 6.00049 9.00002 6.00049C8.29922 6.00049 7.73102 6.5685 7.73102 7.2695C7.73102 7.9705 8.29912 8.53851 9.00002 8.53851ZM11.635 10.9675C11.804 11.3485 11.595 11.7865 11.198 11.9115C10.632 12.0895 9.88401 12.2505 9.00001 12.2505C8.11601 12.2505 7.36701 12.0895 6.80201 11.9115C6.40501 11.7865 6.19701 11.3485 6.36501 10.9675C6.81301 9.9565 7.82301 9.25049 9.00001 9.25049C10.177 9.25049 11.187 9.9565 11.635 10.9675Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M16.75 3.50049C17.1642 3.50049 17.5 3.83627 17.5 4.25049V13.7505C17.5 14.1647 17.1642 14.5005 16.75 14.5005C16.3358 14.5005 16 14.1647 16 13.7505V4.25049C16 3.83627 16.3358 3.50049 16.75 3.50049Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M1.25 3.50049C1.66421 3.50049 2 3.83627 2 4.25049V13.7505C2 14.1647 1.66421 14.5005 1.25 14.5005C0.835786 14.5005 0.5 14.1647 0.5 13.7505V4.25049C0.5 3.83627 0.835786 3.50049 1.25 3.50049Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Contacts;
