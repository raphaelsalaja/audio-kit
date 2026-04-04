import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UsersCoin({
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
          d="M9 10C6.932 10 5.25 11.682 5.25 13.75C5.25 15.818 6.932 17.5 9 17.5C11.068 17.5 12.75 15.818 12.75 13.75C12.75 11.682 11.068 10 9 10ZM9.75 14.5C9.75 14.914 9.414 15.25 9 15.25C8.586 15.25 8.25 14.914 8.25 14.5V13C8.25 12.586 8.586 12.25 9 12.25C9.414 12.25 9.75 12.586 9.75 13V14.5Z"
          fill={fill}
        />
        <path
          d="M8.71206 8.529C8.39206 8.174 8.13706 7.982 7.87806 7.793C7.12206 7.242 6.19006 7 5.25006 7C3.03406 7 1.08306 8.569 0.609059 10.732C0.421059 11.596 0.959059 12.48 1.83406 12.744C2.38806 12.911 2.95906 13.039 3.57806 13.129C3.59206 13.13 3.67606 13.137 3.81106 13.145C4.10406 10.633 6.15706 8.67 8.71206 8.528V8.529Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9.28809 8.529C9.60809 8.174 9.86309 7.982 10.1221 7.793C10.8781 7.242 11.8101 7 12.7501 7C14.9661 7 16.9171 8.569 17.3911 10.732C17.5791 11.596 17.0411 12.48 16.1661 12.744C15.6121 12.911 15.0411 13.039 14.4221 13.129C14.4081 13.13 14.3241 13.137 14.1891 13.145C13.8961 10.633 11.8431 8.67 9.28809 8.528V8.529Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M7.5 3.25C7.5 2.00736 6.49264 1 5.25 1C4.00736 1 3 2.00736 3 3.25C3 4.49264 4.00736 5.5 5.25 5.5C6.49264 5.5 7.5 4.49264 7.5 3.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M15 3.25C15 2.00736 13.9926 1 12.75 1C11.5074 1 10.5 2.00736 10.5 3.25C10.5 4.49264 11.5074 5.5 12.75 5.5C13.9926 5.5 15 4.49264 15 3.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default UsersCoin;
