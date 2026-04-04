import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderPen({
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
          d="M17.3627 11.2217L17.0273 10.8863C16.3671 10.2247 15.2143 10.2252 14.5522 10.8858L11.391 14.0469C11.3104 14.1275 11.2494 14.2251 11.2123 14.3325L10.2914 17.0034C10.1976 17.2749 10.267 17.5757 10.4701 17.7783C10.6132 17.9214 10.8046 17.998 11.0004 17.998C11.0824 17.998 11.165 17.9848 11.245 17.957L13.9159 17.0361C14.0233 16.999 14.121 16.938 14.2015 16.8574L17.3626 13.6963C17.6932 13.3657 17.8753 12.9263 17.8753 12.459C17.8753 11.9912 17.6933 11.5518 17.3627 11.2217Z"
          fill={fill}
        />
        <path
          d="M16.5 6.5H1.5V13.25C1.5 14.7692 2.73079 16 4.25 16H9.05068L9.79447 13.8428C9.90579 13.5205 10.0889 13.2277 10.3303 12.9863L13.4927 9.82397C14.2931 9.02539 15.4466 8.73808 16.5 8.96583V6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default FolderPen;
