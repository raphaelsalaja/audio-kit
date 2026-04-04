import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderFeather({
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
          d="M4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V6.5H16.5V6.25C16.5 4.73079 15.2692 3.5 13.75 3.5H8.72395L8.34569 3.02827C7.82347 2.37825 7.03552 2 6.201 2H4.25Z"
          fill={fill}
        />
        <path
          d="M17.9161 10.405C17.7765 10.1355 17.4991 9.97678 17.1847 10.0031C10.8302 10.5593 10.0128 17.0993 10.005 17.1652C9.95808 17.5768 10.254 17.9484 10.6652 17.9953C10.6945 17.9987 10.7228 18.0002 10.7511 18.0002C11.1271 18.0002 11.4513 17.718 11.4952 17.3352C11.4996 17.2965 11.5238 17.1039 11.5878 16.8115C11.6751 16.3893 12.0313 15.0158 12.8282 14.1096C12.8282 14.1096 12.5001 15.3908 12.7035 16.5002H13.5001C16.5499 16.5002 16.919 14.5148 17.1886 13.0651C17.3214 12.3522 17.4464 11.6794 17.8224 11.2345C18.0187 11.0026 18.0557 10.675 17.9161 10.405Z"
          fill={fill}
        />
        <path
          d="M16.5 6.5H1.5V13.25C1.5 14.7692 2.73079 16 4.25 16H10.2641C10.7955 14.1744 12.3328 10.7776 16.5 10.0891V6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default FolderFeather;
