import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderSparkle({
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
          d="M16.9873 13.5381L15.0928 12.9072L14.4615 11.0127C14.3594 10.707 14.0728 10.5 13.7501 10.5C13.4274 10.5 13.1407 10.707 13.0387 11.0127L12.4074 12.9072L10.5129 13.5381C10.2067 13.6406 10.0002 13.9268 10.0002 14.25C10.0002 14.5732 10.2067 14.8594 10.5129 14.9619L12.4074 15.5928L13.0387 17.4873C13.1408 17.793 13.4274 18 13.7501 18C14.0728 18 14.3595 17.793 14.4615 17.4873L15.0928 15.5928L16.9873 14.9619C17.2935 14.8594 17.5 14.5732 17.5 14.25C17.5 13.9268 17.2935 13.6406 16.9873 13.5381Z"
          fill={fill}
        />
        <path
          d="M16.5 6.5H1.5V13.25C1.5 14.7692 2.73079 16 4.25 16H9.33549C8.81823 15.5815 8.5002 14.9443 8.5002 14.25C8.5002 13.2806 9.12237 12.4218 10.039 12.1149L11.2215 11.7211L11.6156 10.5385C11.9217 9.62132 12.781 9 13.7501 9C14.7195 9 15.5785 9.62199 15.8846 10.5385L16.2787 11.7211L16.5 11.7948V6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default FolderSparkle;
