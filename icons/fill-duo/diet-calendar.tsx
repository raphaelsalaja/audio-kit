import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DietCalendar({
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
          d="M1 4.75C1 3.23079 2.23079 2 3.75 2H13.25C14.7692 2 16 3.23079 16 4.75V8.57475C15.6658 8.22084 15.1922 8 14.667 8C13.1457 8 11.8741 9.07394 11.5694 10.5047C10.9227 10.4769 10.1605 10.6048 9.39956 11.1741C8.4073 11.9163 8.01571 13.0982 8.00117 14.2018C7.99345 14.7875 8.08734 15.3956 8.27809 16H3.75C2.23079 16 1 14.7692 1 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6 0.75C6 0.335786 5.66421 0 5.25 0C4.83579 0 4.5 0.335786 4.5 0.75V2H3.75C2.23079 2 1 3.23079 1 4.75V6H16V4.75C16 3.23079 14.7692 2 13.25 2H12.5V0.75C12.5 0.335786 12.1642 0 11.75 0C11.3358 0 11 0.335786 11 0.75V2H6V0.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.667 9.5C14.851 9.5 15 9.649 15 9.833C15 10.753 14.253 11.5 13.333 11.5C13.149 11.5 13 11.351 13 11.167C13 10.247 13.747 9.5 14.667 9.5Z"
          fill={fill}
        />
        <path
          d="M15.908 12.3752C14.996 11.6512 13.97 12.2472 13.103 12.2472C12.236 12.2472 11.314 11.6152 10.298 12.3752C9.28204 13.1352 9.18404 15.0532 10.312 16.8322C11.395 18.5402 12.487 17.8702 13.104 17.8702C13.721 17.8702 14.813 18.5412 15.896 16.8322C17.023 15.0532 16.747 13.0382 15.908 12.3752Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default DietCalendar;
