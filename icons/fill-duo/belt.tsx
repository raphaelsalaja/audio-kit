import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Belt({
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
          d="M5.5 6.25C5.5 5.28349 6.28349 4.5 7.25 4.5H10.75C11.7165 4.5 12.5 5.28349 12.5 6.25V11.75C12.5 12.7165 11.7165 13.5 10.75 13.5H7.25C6.28349 13.5 5.5 12.7165 5.5 11.75V6.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.51772 6C5.50604 6.08165 5.5 6.16512 5.5 6.25V11.75C5.5 11.8349 5.50604 11.9183 5.51772 12H1.75C0.783786 12 0 11.2162 0 10.25V7.75C0 6.78379 0.783786 6 1.75 6H5.51772Z"
          fill={fill}
        />
        <path
          d="M12.5 8.25V9.75H9.75C9.33579 9.75 9 9.41421 9 9C9 8.58579 9.33579 8.25 9.75 8.25H12.5Z"
          fill={fill}
        />
        <path
          d="M12.4823 6C12.494 6.08165 12.5 6.16512 12.5 6.25V11.75C12.5 11.8349 12.494 11.9183 12.4823 12H16.25C17.2162 12 18 11.2162 18 10.25V7.75C18 6.78379 17.2162 6 16.25 6H12.4823Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Belt;
