import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Mobile({
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
          d="M6.75 2C6.75 1.58579 7.08579 1.25 7.5 1.25H10.5C10.9142 1.25 11.25 1.58579 11.25 2V2.75C11.25 3.16421 10.9142 3.5 10.5 3.5H7.5C7.08579 3.5 6.75 3.16421 6.75 2.75V2Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.25 17H5.75C4.233 17 3 15.767 3 14.25V3.75C3 2.233 4.233 1 5.75 1H12.25C13.767 1 15 2.233 15 3.75V14.25C15 15.767 13.767 17 12.25 17ZM5.75 2.5C5.061 2.5 4.5 3.061 4.5 3.75V14.25C4.5 14.939 5.061 15.5 5.75 15.5H12.25C12.939 15.5 13.5 14.939 13.5 14.25V3.75C13.5 3.061 12.939 2.5 12.25 2.5H5.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Mobile;
