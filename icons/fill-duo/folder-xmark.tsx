import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderXmark({
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
          d="M16.5 6.5H1.5V13.25C1.5 14.7692 2.73079 16 4.25 16H11.3787C11.4592 15.8796 11.5527 15.7653 11.659 15.659L12.068 15.25L11.659 14.841C10.7803 13.9623 10.7803 12.5377 11.659 11.659C12.5377 10.7803 13.9623 10.7803 14.841 11.659L15.25 12.068L15.659 11.659C15.9046 11.4134 16.1929 11.2364 16.5 11.1281V6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V6.5H16.5V6.25C16.5 4.73079 15.2692 3.5 13.75 3.5H8.72395L8.34569 3.02827C7.82347 2.37825 7.03552 2 6.201 2H4.25Z"
          fill={fill}
        />
        <path
          d="M13.7803 12.7197C13.4874 12.4268 13.0126 12.4268 12.7197 12.7197C12.4268 13.0126 12.4268 13.4874 12.7197 13.7803L14.1893 15.25L12.7197 16.7197C12.4268 17.0126 12.4268 17.4874 12.7197 17.7803C13.0126 18.0732 13.4874 18.0732 13.7803 17.7803L15.25 16.3107L16.7197 17.7803C17.0126 18.0732 17.4874 18.0732 17.7803 17.7803C18.0732 17.4874 18.0732 17.0126 17.7803 16.7197L16.3107 15.25L17.7803 13.7803C18.0732 13.4874 18.0732 13.0126 17.7803 12.7197C17.4874 12.4268 17.0126 12.4268 16.7197 12.7197L15.25 14.1893L13.7803 12.7197Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FolderXmark;
