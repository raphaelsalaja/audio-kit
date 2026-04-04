import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BoxSearch({
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
          d="M4.75 4.5C3.23069 4.5 2 5.73128 2 7.25V13.25C2 14.7687 3.23069 16 4.75 16H9.96762C9.66829 15.3975 9.5 14.7185 9.5 14C9.5 11.5144 11.5144 9.5 14 9.5C14.7185 9.5 15.3975 9.66829 16 9.96762V7.25C16 5.73128 14.7693 4.5 13.25 4.5H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14 11C12.3428 11 11 12.3428 11 14C11 15.6572 12.3428 17 14 17C14.5565 17 15.0775 16.8486 15.5241 16.5847L16.7197 17.7803C17.0126 18.0732 17.4874 18.0732 17.7803 17.7803C18.0732 17.4874 18.0732 17.0126 17.7803 16.7197L16.5847 15.5241C16.8486 15.0775 17 14.5565 17 14C17 12.3428 15.6572 11 14 11ZM12.5 14C12.5 13.1712 13.1712 12.5 14 12.5C14.8288 12.5 15.5 13.1712 15.5 14C15.5 14.8288 14.8288 15.5 14 15.5C13.1712 15.5 12.5 14.8288 12.5 14Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.6445 5.89654C15.1723 5.06272 14.2771 4.5 13.25 4.5H4.75C3.71996 4.5 2.82259 5.06594 2.35143 5.9037L3.77709 3.0288C4.24151 2.09309 5.1956 1.5 6.241 1.5H11.759C12.8044 1.5 13.7584 2.09285 14.2228 3.02856L15.6445 5.89654Z"
          fill={fill}
        />
        <path
          d="M9.00002 3.5C9.41423 3.5 9.75002 3.83579 9.75002 4.25V7.25C9.75002 7.66421 9.41423 8 9.00002 8C8.5858 8 8.25002 7.66421 8.25002 7.25V4.25C8.25002 3.83579 8.5858 3.5 9.00002 3.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default BoxSearch;
