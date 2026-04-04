import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Layers2({
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
          d="M15.6866 9.29826L9.8175 6.20799C9.3068 5.93799 8.6964 5.93751 8.1857 6.20751L2.3156 9.29826C1.8215 9.55856 1.5148 10.0669 1.5148 10.6254C1.5148 11.1839 1.8214 11.6923 2.3156 11.9525L8.1847 15.0428C8.4406 15.1781 8.7208 15.2454 9.0016 15.2454C9.2814 15.2454 9.5617 15.178 9.8165 15.0433L15.6866 11.9525C16.1807 11.6922 16.4874 11.1839 16.4874 10.6254C16.4874 10.0669 16.1808 9.55846 15.6866 9.29826Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.6866 6.04741L9.8175 2.95708C9.3068 2.68708 8.6964 2.68659 8.1857 2.95659L2.3156 6.04741C1.8215 6.30771 1.5148 6.816 1.5148 7.3745C1.5148 7.933 1.8214 8.44138 2.3156 8.70158L8.1847 11.7919C8.4406 11.9272 8.7208 11.9945 9.0016 11.9945C9.2814 11.9945 9.5617 11.9271 9.8165 11.7924L15.6866 8.70158C16.1807 8.44128 16.4874 7.933 16.4874 7.3745C16.4874 6.816 16.1808 6.30761 15.6866 6.04741Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Layers2;
