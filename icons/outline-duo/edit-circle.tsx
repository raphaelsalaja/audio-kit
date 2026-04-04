import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EditCircle({
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
          d="M6.99999 4.24999V3.29755C5.27231 3.90346 3.90346 5.27231 3.29755 6.99999H4.24999C4.80227 6.99999 5.24999 7.4477 5.24999 7.99999V9.99999C5.24999 10.5523 4.80227 11 4.24999 11H3.29755C3.90346 12.7277 5.27231 14.0965 6.99999 14.7024V13.75C6.99999 13.1977 7.4477 12.75 7.99999 12.75H9.99999C10.5523 12.75 11 13.1977 11 13.75V14.7024C12.7277 14.0965 14.0965 12.7277 14.7024 11H13.75C13.1977 11 12.75 10.5523 12.75 9.99999V7.99999C12.75 7.4477 13.1977 6.99999 13.75 6.99999H14.7024C14.0965 5.27231 12.7277 3.90346 11 3.29755V4.24999C11 4.80227 10.5523 5.24999 9.99999 5.24999H7.99999C7.4477 5.24999 6.99999 4.80227 6.99999 4.24999Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M7.00001 14.658C5.29601 14.055 3.94501 12.705 3.34201 11"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.658 11C14.055 12.704 12.705 14.055 11 14.658"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11 3.34201C12.704 3.94501 14.055 5.29501 14.658 7.00001"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.34201 7.00001C3.94501 5.29601 5.29501 3.94501 7.00001 3.34201"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10 1.25H8C7.44772 1.25 7 1.69772 7 2.25V4.25C7 4.80228 7.44772 5.25 8 5.25H10C10.5523 5.25 11 4.80228 11 4.25V2.25C11 1.69772 10.5523 1.25 10 1.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10 12.75H8C7.44772 12.75 7 13.1977 7 13.75V15.75C7 16.3023 7.44772 16.75 8 16.75H10C10.5523 16.75 11 16.3023 11 15.75V13.75C11 13.1977 10.5523 12.75 10 12.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 7H2.25C1.69772 7 1.25 7.44772 1.25 8V10C1.25 10.5523 1.69772 11 2.25 11H4.25C4.80228 11 5.25 10.5523 5.25 10V8C5.25 7.44772 4.80228 7 4.25 7Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 7H13.75C13.1977 7 12.75 7.44772 12.75 8V10C12.75 10.5523 13.1977 11 13.75 11H15.75C16.3023 11 16.75 10.5523 16.75 10V8C16.75 7.44772 16.3023 7 15.75 7Z"
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

export default EditCircle;
