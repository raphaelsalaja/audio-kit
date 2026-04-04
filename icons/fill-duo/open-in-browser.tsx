import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function OpenInBrowser({
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
          d="M14.25 2H3.75C2.233 2 1 3.233 1 4.75V12.25C1 13.767 2.233 15 3.75 15H14.25C15.767 15 17 13.767 17 12.25V4.75C17 3.233 15.767 2 14.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.5 12C11.692 12 11.884 11.9271 12.03 11.7801C12.323 11.4871 12.323 11.012 12.03 10.719L9.53 8.21902C9.237 7.92602 8.762 7.92602 8.469 8.21902L5.969 10.719C5.676 11.012 5.676 11.4871 5.969 11.7801C6.262 12.0731 6.737 12.0731 7.03 11.7801L8.25 10.5601V17.249C8.25 17.663 8.586 17.999 9 17.999C9.414 17.999 9.75 17.663 9.75 17.249V10.5601L10.97 11.7801C11.116 11.9261 11.308 12 11.5 12Z"
          fill={fill}
        />
        <path
          d="M17 6V4.75C17 3.2329 15.767 2 14.25 2H3.75C2.233 2 1 3.2329 1 4.75V6H17Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default OpenInBrowser;
