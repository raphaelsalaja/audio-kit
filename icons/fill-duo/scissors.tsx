import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Scissors({
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
          d="M12.7635 7.75C12.7635 7.33579 13.0993 7 13.5135 7H16.25C16.6642 7 17 7.33579 17 7.75C17 8.16421 16.6642 8.5 16.25 8.5H13.5135C13.0993 8.5 12.7635 8.16421 12.7635 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4 2.5C2.34279 2.5 1 3.84279 1 5.5C1 7.15721 2.34279 8.5 4 8.5H9.25C9.66421 8.5 10 8.16421 10 7.75C10 7.33579 9.66421 7 9.25 7H6.59882C6.85398 6.55878 7 6.04648 7 5.5C7 3.84279 5.65721 2.5 4 2.5ZM4 7C4.82879 7 5.5 6.32879 5.5 5.5C5.5 4.67121 4.82879 4 4 4C3.17121 4 2.5 4.67121 2.5 5.5C2.5 6.32879 3.17121 7 4 7Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M14.5324 3.52824C14.8241 3.23419 14.8223 2.75932 14.5282 2.46758C14.2342 2.17585 13.7593 2.17772 13.4676 2.47176L4.89427 11.1129C4.34219 11.657 4 12.4134 4 13.25C4 14.9072 5.34279 16.25 7 16.25C8.65721 16.25 10 14.9072 10 13.25C10 11.8574 9.05183 10.6869 7.76567 10.3485L14.5324 3.52824ZM5.92979 12.1987C5.9337 12.1949 5.93757 12.1911 5.94141 12.1872L5.95211 12.1765C6.22243 11.9126 6.59214 11.75 7 11.75C7.82879 11.75 8.5 12.4212 8.5 13.25C8.5 14.0788 7.82879 14.75 7 14.75C6.17121 14.75 5.5 14.0788 5.5 13.25C5.5 12.8404 5.66393 12.4693 5.92979 12.1987Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Scissors;
