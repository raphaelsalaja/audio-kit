import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LayerReplace({
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
          d="M3.75 1.5C2.50726 1.5 1.5 2.50792 1.5 3.75V8.75C1.5 9.99208 2.50726 11 3.75 11H8.75C9.99274 11 11 9.99208 11 8.75V3.75C11 2.50792 9.99274 1.5 8.75 1.5H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9.25 7C8.00726 7 7 8.00792 7 9.25V14.25C7 15.4921 8.00726 16.5 9.25 16.5H14.25C15.4927 16.5 16.5 15.4921 16.5 14.25V9.25C16.5 8.00792 15.4927 7 14.25 7H9.25Z"
          fill={fill}
        />
        <path
          d="M2.25 12C2.66421 12 3 12.3358 3 12.75C3 13.9928 4.00721 15 5.25 15C5.66421 15 6 15.3358 6 15.75C6 16.1642 5.66421 16.5 5.25 16.5C3.17879 16.5 1.5 14.8212 1.5 12.75C1.5 12.3358 1.83579 12 2.25 12Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12 2.25C12 1.83579 12.3358 1.5 12.75 1.5C14.8212 1.5 16.5 3.17879 16.5 5.25C16.5 5.66421 16.1642 6 15.75 6C15.3358 6 15 5.66421 15 5.25C15 4.00721 13.9928 3 12.75 3C12.3358 3 12 2.66421 12 2.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default LayerReplace;
