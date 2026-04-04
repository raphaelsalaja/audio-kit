import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopeSparkle({
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
          d="M17.4873 13.5381L15.5928 12.9072L14.9615 11.0127C14.8594 10.707 14.5728 10.5 14.2501 10.5C13.9274 10.5 13.6407 10.707 13.5387 11.0127L12.9074 12.9072L11.0129 13.5381C10.7067 13.6406 10.5002 13.9268 10.5002 14.25C10.5002 14.5732 10.7067 14.8594 11.0129 14.9619L12.9074 15.5928L13.5387 17.4873C13.6408 17.793 13.9274 18 14.2501 18C14.5728 18 14.8595 17.793 14.9615 17.4873L15.5928 15.5928L17.4873 14.9619C17.7935 14.8594 18 14.5732 18 14.25C18 13.9268 17.7935 13.6406 17.4873 13.5381Z"
          fill={fill}
        />
        <path
          d="M1 5.25C1 3.73203 2.23054 2.5 3.75 2.5H14.25C15.7695 2.5 17 3.73203 17 5.25V11.7948L16.7786 11.7211L16.3842 10.5375C16.0781 9.62101 15.2194 9 14.2501 9C13.281 9 12.4216 9.62132 12.1156 10.5385L11.7215 11.7211L10.5367 12.1157C9.62014 12.4225 9.00018 13.2806 9.00018 14.25C9.00018 14.7067 9.13779 15.1387 9.37918 15.5H3.75C2.23054 15.5 1 14.268 1 12.75V5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16.9688 4.83458L9.84531 8.76513C9.31885 9.05549 8.68124 9.05557 8.15478 8.76521L1.03101 4.83535C1.23084 3.513 2.37171 2.5 3.74998 2.5H14.25C15.628 2.5 16.7687 3.5126 16.9688 4.83458Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default EnvelopeSparkle;
