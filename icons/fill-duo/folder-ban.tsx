import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderBan({
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
          d="M13 10C10.794 10 9 11.794 9 14C9 16.206 10.794 18 13 18C15.206 18 17 16.206 17 14C17 11.794 15.206 10 13 10ZM13 11.5C13.416 11.5 13.802 11.612 14.147 11.792L10.792 15.147C10.612 14.802 10.5 14.415 10.5 14C10.5 12.622 11.622 11.5 13 11.5ZM13 16.5C12.584 16.5 12.198 16.388 11.853 16.208L15.208 12.853C15.388 13.198 15.5 13.585 15.5 14C15.5 15.378 14.378 16.5 13 16.5Z"
          fill={fill}
        />
        <path
          d="M16.5 6.5H1.5V13.25C1.5 14.7692 2.73079 16 4.25 16H7.87583C7.63322 15.38 7.5 14.7053 7.5 14C7.5 10.9656 9.96557 8.5 13 8.5C14.3289 8.5 15.5486 8.97285 16.5 9.75925V6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V6.5H16.5V6.25C16.5 4.73079 15.2692 3.5 13.75 3.5H8.72395L8.34569 3.02827C7.82347 2.37825 7.03552 2 6.201 2H4.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FolderBan;
