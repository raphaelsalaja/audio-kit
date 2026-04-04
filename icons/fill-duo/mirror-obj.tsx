import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MirrorObj({
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
          d="M9 9.75C9.4142 9.75 9.75 9.414 9.75 9C9.75 8.586 9.4142 8.25 9 8.25C8.5858 8.25 8.25 8.586 8.25 9C8.25 9.414 8.5858 9.75 9 9.75Z"
          fill={fill}
        />
        <path
          d="M9 3.5C9.4142 3.5 9.75 3.164 9.75 2.75C9.75 2.336 9.4142 2 9 2C8.5858 2 8.25 2.336 8.25 2.75C8.25 3.164 8.5858 3.5 9 3.5Z"
          fill={fill}
        />
        <path
          d="M9 6.625C9.4142 6.625 9.75 6.289 9.75 5.875C9.75 5.461 9.4142 5.125 9 5.125C8.5858 5.125 8.25 5.461 8.25 5.875C8.25 6.289 8.5858 6.625 9 6.625Z"
          fill={fill}
        />
        <path
          d="M9 12.875C9.4142 12.875 9.75 12.539 9.75 12.125C9.75 11.711 9.4142 11.375 9 11.375C8.5858 11.375 8.25 11.711 8.25 12.125C8.25 12.539 8.5858 12.875 9 12.875Z"
          fill={fill}
        />
        <path
          d="M9 16C9.4142 16 9.75 15.664 9.75 15.25C9.75 14.836 9.4142 14.5 9 14.5C8.5858 14.5 8.25 14.836 8.25 15.25C8.25 15.664 8.5858 16 9 16Z"
          fill={fill}
        />
        <path
          d="M6.96434 3.141C7.14473 3.28322 7.25 3.50027 7.25 3.72998V13.98C7.25 14.3268 7.01224 14.6284 6.67501 14.7093L3.65807 15.4333C2.55704 15.6976 1.5 14.8626 1.5 13.732V5.53802C1.5 4.72885 2.05513 4.02554 2.84195 3.83669L6.32495 3.00069C6.54832 2.94708 6.78394 2.99879 6.96434 3.141Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.0357 3.141C11.2161 2.99879 11.4517 2.94708 11.675 3.00069L15.158 3.83669C15.9449 4.02554 16.5 4.72885 16.5 5.53802V13.732C16.5 14.8626 15.443 15.6976 14.342 15.4333L11.325 14.7093C10.9878 14.6284 10.75 14.3268 10.75 13.98V3.72998C10.75 3.50027 10.8553 3.28322 11.0357 3.141Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MirrorObj;
