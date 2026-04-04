import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MapAlert({
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
          d="M5.96484 2.81284C6.15084 2.77184 6.34541 2.78397 6.52441 2.84897L11.4756 4.64975C11.6546 4.71475 11.8492 4.72788 12.0352 4.68588L15.0332 4.01987C15.6581 3.88103 16.25 4.35651 16.25 4.99643V7.79233L15.666 8.44467C14.3154 6.93058 11.855 7.01588 10.627 8.69956L10.5039 8.87924L7.57129 13.5101C7.51542 13.5983 7.46522 13.6885 7.41895 13.7787L6.52441 13.3499C6.34541 13.2849 6.15084 13.2718 5.96484 13.3138L2.9668 13.9798C2.34194 14.1187 1.75015 13.6441 1.75 13.0042V4.55209C1.75 4.08309 2.0762 3.67653 2.5332 3.57553L5.96484 2.81284Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.25 7.98069V4.99709C16.25 4.35699 15.658 3.88209 15.033 4.02099L12.035 4.68699C11.849 4.72799 11.655 4.71608 11.476 4.65088L6.524 2.85009C6.345 2.78489 6.151 2.77198 5.965 2.81398L2.533 3.57689C2.075 3.67899 1.75 4.08498 1.75 4.55298V13.003C1.75 13.6431 2.342 14.118 2.967 13.9791L5.965 13.3131C6.151 13.2721 6.345 13.284 6.524 13.3492L6.7612 13.4354"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 16.25H16.183C16.9711 16.25 17.4495 15.3808 17.0278 14.7149L14.0948 10.0839C13.7022 9.46401 12.7978 9.46401 12.4052 10.0839L9.4722 14.7149C9.0505 15.3807 9.5289 16.25 10.317 16.25H10.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 12.75V14.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 17.5C13.6642 17.5 14 17.1642 14 16.75C14 16.3358 13.6642 16 13.25 16C12.8358 16 12.5 16.3358 12.5 16.75C12.5 17.1642 12.8358 17.5 13.25 17.5Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default MapAlert;
