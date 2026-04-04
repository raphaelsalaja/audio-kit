import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Temperature({
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
          d="M10.5 10.017V4.25C10.5 2.458 9.042 1 7.25 1C5.458 1 4 2.458 4 4.25V10.017C3.353 10.783 3 11.742 3 12.75C3 15.093 4.907 17 7.25 17C9.593 17 11.5 15.093 11.5 12.75C11.5 11.742 11.147 10.783 10.5 10.017ZM7.25 14.25C6.422 14.25 5.75 13.578 5.75 12.75C5.75 12.196 6.054 11.718 6.5 11.458V6.75C6.5 6.336 6.836 6 7.25 6C7.664 6 8 6.336 8 6.75V11.458C8.446 11.718 8.75 12.196 8.75 12.75C8.75 13.578 8.078 14.25 7.25 14.25Z"
          fill={fill}
        />
        <path
          d="M12 3.25C12 2.83579 12.3358 2.5 12.75 2.5H15.5C15.9142 2.5 16.25 2.83579 16.25 3.25C16.25 3.66421 15.9142 4 15.5 4H12.75C12.3358 4 12 3.66421 12 3.25Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M12 6.25C12 5.83579 12.3358 5.5 12.75 5.5H14C14.4142 5.5 14.75 5.83579 14.75 6.25C14.75 6.66421 14.4142 7 14 7H12.75C12.3358 7 12 6.66421 12 6.25Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M12 9.25C12 8.83579 12.3358 8.5 12.75 8.5H15.5C15.9142 8.5 16.25 8.83579 16.25 9.25C16.25 9.66421 15.9142 10 15.5 10H12.75C12.3358 10 12 9.66421 12 9.25Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Temperature;
